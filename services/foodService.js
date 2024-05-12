import mockFoodData from "../components/commons/mock-data/mock-data";

export const fetchMockFoodData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFoodData);
        }, 1000);
    });
};
