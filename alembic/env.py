import os
import sys
from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
from dotenv import load_dotenv, find_dotenv

# 1) Add project root to sys.path
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, project_root)

# 2) Load environment variables FIRST
dotenv_path = find_dotenv("backend/.env.development", raise_error_if_not_found=True)
load_dotenv(dotenv_path, override=True)

# 3) Alembic config
config = context.config

# 4) Get database URL from environment or config
db_url = os.getenv("DATABASE_URL")
if isinstance(db_url, str) and db_url.strip():
    config.set_main_option("sqlalchemy.url", db_url)
else:
    # Use existing URL from alembic.ini or raise error if needed
    db_url = config.get_main_option("sqlalchemy.url")
    if not db_url:
        raise RuntimeError(f"DATABASE_URL environment variable not set and no URL in alembic.ini")

# 5) Logging setup
if config.config_file_name:
    fileConfig(config.config_file_name)

# 6) Import models metadata
from backend.database import Base
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
