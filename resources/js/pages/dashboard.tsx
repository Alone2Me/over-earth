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
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-4">
                {/* Stats Cards – 1 column on small, 2 on medium, 4 on extra large screens */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <CardsStats />
                </div>

                {/* Exercise Minutes – 1 column on small, 2 on extra large */}
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <CardsExerciseMinutes />
                </div>

                {/* Payments – full width */}
                <div className="w-full">
                    <CardsPayments />
                </div>
            </div>
        </AppLayout>
    );
}
