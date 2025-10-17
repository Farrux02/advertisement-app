import { IAd } from '~/modules/advertisement';

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const search = (query.search as string)?.toLowerCase() || ''

    const data: IAd[] = [
        {
            id: 1,
            title: "Drive me home from the airport",
            category: "Grocery Deliveries & Services",
            region: "Tallinn",
            fromDate: "2025-05-25",
            tillDate: "2025-05-28",
            clientFullName: "Sophia Williams",
            avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
            warnings: 5,
            rating: 5,
        },
        {
            id: 2,
            title: "Pick up groceries on Saturday",
            category: "Grocery Deliveries & Services",
            region: "Tallinn",
            fromDate: "2025-05-25",
            tillDate: "2025-05-28",
            clientFullName: "Liam Johnson",
            avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg",
            warnings: 3,
            rating: 4,
        },
        {
            id: 3,
            title: "Attend the conference next week",
            category: "Business Project Management",
            region: "Tallinn",
            fromDate: "2025-05-25",
            tillDate: "2025-05-28",
            clientFullName: "Emma Brown",
            avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
            warnings: 2,
            rating: 3,
        },
        {
            id: 4,
            title: "Help move furniture to new office",
            category: "Moving & Transport",
            region: "Tartu",
            fromDate: "2025-06-02",
            tillDate: "2025-06-03",
            clientFullName: "Noah Davis",
            avatarUrl: "https://randomuser.me/api/portraits/men/31.jpg",
            warnings: 1,
            rating: 4,
        },
        {
            id: 5,
            title: "Fix lighting in living room",
            category: "Home Repair",
            region: "Narva",
            fromDate: "2025-06-10",
            tillDate: "2025-06-11",
            clientFullName: "Olivia Smith",
            avatarUrl: "https://randomuser.me/api/portraits/women/40.jpg",
            warnings: 4,
            rating: 5,
        },
        {
            id: 6,
            title: "Walk my dog in the evening",
            category: "Pet Services",
            region: "Tallinn",
            fromDate: "2025-06-01",
            tillDate: "2025-06-05",
            clientFullName: "William Johnson",
            avatarUrl: "https://randomuser.me/api/portraits/men/50.jpg",
            warnings: 2,
            rating: 4,
        },
        {
            id: 7,
            title: "Water plants while on vacation",
            category: "Home Care",
            region: "Parnu",
            fromDate: "2025-07-10",
            tillDate: "2025-07-20",
            clientFullName: "Ava Miller",
            avatarUrl: "https://randomuser.me/api/portraits/women/48.jpg",
            warnings: 0,
            rating: 5,
        },
        {
            id: 8,
            title: "Deliver a small package to Tartu",
            category: "Courier & Delivery",
            region: "Tartu",
            fromDate: "2025-07-15",
            tillDate: "2025-07-16",
            clientFullName: "James Anderson",
            avatarUrl: "https://randomuser.me/api/portraits/men/38.jpg",
            warnings: 1,
            rating: 5,
        },
        {
            id: 9,
            title: "Take photos at birthday party",
            category: "Photography",
            region: "Tallinn",
            fromDate: "2025-07-22",
            tillDate: "2025-07-22",
            clientFullName: "Charlotte Thompson",
            avatarUrl: "https://randomuser.me/api/portraits/women/55.jpg",
            warnings: 0,
            rating: 4,
        },
        {
            id: 10,
            title: "Organize event catering",
            category: "Catering & Events",
            region: "Viljandi",
            fromDate: "2025-08-01",
            tillDate: "2025-08-03",
            clientFullName: "Ethan Moore",
            avatarUrl: "https://randomuser.me/api/portraits/men/26.jpg",
            warnings: 3,
            rating: 5,
        },
    ]

    const filtered = search
        ? data.filter((ad) =>
            [ad.title, ad.clientFullName, ad.category, ad.region]
                .some((field) =>
                    field.toLowerCase().includes(search)
                )
        )
        : data

    return { data: filtered }
})