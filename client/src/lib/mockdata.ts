import { FoodOrderStatusEnum, UserRoleEnum } from "@/types";


export const mockData = [
  {
    _id: "6772231f2ef39e0ffbc0fcf2",
    user: {
      _id: "67722047cda689533b75309a",
      email: "tugu@gmail.com",
      address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
      role: UserRoleEnum.ADMIN,
      orderedFoods: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    totalPrice: 7000,
    status: FoodOrderStatusEnum.PENDING,
    foodOrderItems: [
      {
        food: {
          _id: "676e38797de641d3ad8dbb6c",
          foodName: "Fresh Salad",
          price: 7000,
          image:
            "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
          ingredients: "cucumbers, tomatoes",
          category: "676e36ea64d1f8cafda026a6",
          createdAt: new Date(),
          updatedAt: "2024-12-27T05:17:45.919Z",
          __v: 0,
        },
        quantity: 1,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    _id: "6772231f2ef39e0ffbc0fcf2",
    user: {
      _id: "67722047cda689533b75309a",
      email: "tugdashdasadju@gmail.com",
      address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
      role: UserRoleEnum.ADMIN,
      orderedFoods: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    totalPrice: 7000,
    status: FoodOrderStatusEnum.PENDING,
    foodOrderItems: [
      {
        food: {
          _id: "676e38797de641d3ad8dbb6c",
          foodName: "Fresh Salad",
          price: 7000,
          image:
            "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
          ingredients: "cucumbers, tomatoes",
          category: "676e36ea64d1f8cafda026a6",
          createdAt: new Date(),
          updatedAt: "2024-12-27T05:17:45.919Z",
          __v: 0,
        },
        quantity: 1,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
];
