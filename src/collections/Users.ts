import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    labels: {
        singular: {
            en: 'User',
            pl: 'Użytkownik',
        },
        plural: {
            en: 'Users',
            pl: 'Użytkownicy',
        },
    },
    access: {
        delete: ({ req: { user }, id }) => {
            if (!user) return false

            return Number(id) !== user.id
        },
    },
    auth: true,
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
}
