export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/components/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/components/**/(index|types)(.d)?.ts',
    '!<rootDir>/src/**/components/**/mocks/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/main/**/*.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: { '@/(.*)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
};
