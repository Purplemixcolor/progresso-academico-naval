create table if not exists public.academic_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.academic_progress enable row level security;

drop policy if exists "Users can read own progress" on public.academic_progress;
create policy "Users can read own progress"
on public.academic_progress for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own progress" on public.academic_progress;
create policy "Users can insert own progress"
on public.academic_progress for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own progress" on public.academic_progress;
create policy "Users can update own progress"
on public.academic_progress for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
