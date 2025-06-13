import { CardsExerciseMinutes } from '@/components/exercise-minutes';
import { CardsPayments } from '@/components/payments';
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
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <CardsStats />
                </div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <CardsExerciseMinutes />
                </div>

                <CardsPayments />
                
            </div>
        </AppLayout>
    );
}
