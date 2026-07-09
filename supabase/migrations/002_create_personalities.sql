-- Migration: Create personalities table

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.personalities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    image TEXT,
    skills TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS personalities_updated_at ON public.personalities;
CREATE TRIGGER personalities_updated_at
    BEFORE UPDATE ON public.personalities
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();