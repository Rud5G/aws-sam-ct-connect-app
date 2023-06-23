/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    displayName: 'Tests Typescript Application - AWS SAM',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqZXN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsV0FBVyxFQUFFLHdDQUF3QztJQUNyRCxTQUFTLEVBQUU7UUFDUCxZQUFZLEVBQUUsU0FBUztLQUMxQjtJQUNELGlCQUFpQixFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztJQUMxQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxnQ0FBZ0MsQ0FBQztJQUN4RSxNQUFNLEVBQUUsU0FBUztJQUNqQixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsSUFBSTtJQUNoQixlQUFlLEVBQUUsSUFBSTtJQUNyQixpQkFBaUIsRUFBRSxVQUFVO0lBQzdCLGdCQUFnQixFQUFFLElBQUk7Q0FDekIsQ0FBQyJ9