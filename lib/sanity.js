import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'z0roj19s',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk9xfBrKcQeZNlOSQC4Cs5H0Sjc3BNaRP3Tue5Tbzlz7cuL47XciebpWDK4NPBFlNpCsxpSeCFyxt96Uzh6yrQFOCo8Z5RhHsOiexiehvD3YSL6YftFJiksDe5hufxiD8TGe4RcQfB7AAEuNbYRGV95XKei6MHlRvQRMQKmX2rCw0meujXjI',
  useCdn: false,
})
