'use client'

import EduItem from '@/components/EduItem'
import edu from '@/data/edu'
import {useMemo, useState} from "react";
import SortDropdown from "@/components/SortDropdown";
import FilterDropdown from "@/components/FilterDropdown";
import {AnimatePresence, motion} from "framer-motion";
import {FaFrown} from "react-icons/fa";

/**
 * EduItem component that serves as the main page for displaying work experience.
 * This is accessed at the "/" URL of the application.
 */
export default function EduPage() {
    const [selectedEduUniversity, setSelectedWorkCompanies] = useState<string[]>([]);
    const [eduDrafts, setEduDrafts] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<'oldest' | 'newest'>('newest');

    // Memoized unique work item (companies) list with counts to avoid recalculating on every render
    const uniqueUniversity = useMemo(() => {
        const universityCounts: Record<string, number> = {};
        edu.forEach(EduItem => {
            universityCounts[EduItem.university] = (universityCounts[EduItem.university] || 0) + 1;
        });
        return Object.entries(universityCounts)
            .map(([university, count]) => ({university, count}))
            .sort((a, b) => a.university.localeCompare(b.university));
    }, []);

    const toggleEduDrafts = (tech: string) => {
        setEduDrafts(prev =>
            prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
        );
    };

    const applyFilters = () => {
        setSelectedWorkCompanies([...eduDrafts]);
    };

    const clearFilters = () => {
        setSelectedWorkCompanies([]);
        setEduDrafts([]);
    };

    // Memoized filtered work items based on selected companies and sort order
    const filteredEduItems = useMemo(() => {
        const filtered = edu.filter(EduItem =>
            selectedEduUniversity.length === 0 ||
            (EduItem.university && selectedEduUniversity.some(university => EduItem.university.includes(university)))
        );

        return filtered.sort((a, b) => {
            if (sortOrder === 'newest') {
                return new Date(b.end || '').getTime() - new Date(a.end || '').getTime();
            } else {
                return new Date(a.start || '').getTime() - new Date(b.start || '').getTime();
            }
        });
    }, [selectedEduUniversity, sortOrder]);

    return (
        <section className="px-4 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between gap-4 mb-8 items-center w-full">
                {/* Company Filter Dropdown - Left */}
                <div className="relative flex-grow md:flex-grow-0">
                    <FilterDropdown
                        items={uniqueUniversity.map(({university, count}) => ({name: university, count}))}
                        selectedItems={eduDrafts}
                        onToggle={toggleEduDrafts}
                        onApply={applyFilters}
                        onClear={clearFilters}
                        placeholder="Filter by University"
                        resultCount={filteredEduItems.length}
                    />
                </div>

                {/* Sort Order Dropdown - Right */}
                <div className="relative flex-grow md:flex-grow-0 z-20">
                    <SortDropdown
                        sortOrder={sortOrder}
                        onChange={(order) => setSortOrder(order as 'newest' | 'oldest')}
                        options={[
                            {label: 'Newest First', value: 'newest'},
                            {label: 'Oldest First', value: 'oldest'},
                        ]}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {filteredEduItems.length > 0 ? (
                    <motion.div
                        key="work-items"
                        className="space-y-6 grid"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        {filteredEduItems.map((item) => (
                            <EduItem key={item.slug} {...item} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="no-results"
                        className="flex flex-col items-center text-center text-gray-600 dark:text-gray-300 mt-12 px-4"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.3, ease: 'easeOut'}}
                    >
                        <FaFrown className="text-4xl md:text-5xl mb-3 text-gray-400 dark:text-gray-500"/>
                        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                            No education items found
                        </p>
                        <p className="text-sm md:text-base lg:text-lg mt-2 max-w-2xl">
                            The combination of selected tech stack filters didn&apos;t match any projects.
                            Try changing or clearing your filters.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
