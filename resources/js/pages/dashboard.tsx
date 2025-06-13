import { CardsExerciseMinutes } from '@/components/exercise-minutes';
import { CardsStats } from '@/components/stats';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <CardsStats />
                </div>

                {/* Main Dashboard Placeholder or Content */}
                <div className="relative flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <CardsExerciseMinutes />
                </div>
                
            </div>
        </AppLayout>
    );
}
