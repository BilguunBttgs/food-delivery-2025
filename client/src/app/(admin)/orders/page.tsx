"use client";
import { columns } from "@/components/admin/orders/columns";
import { DataTable } from "@/components/admin/orders/data-table";
import TableSkeleton from "@/components/admin/orders/TableSkeleton";
import { fetchAllOrders } from "@/lib/services/get-all-order";
import { AllFoodOrders } from "@/types";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [foodOrders, setFoodOrders] = useState<AllFoodOrders[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetchAllOrders();
    setFoodOrders(data?.allFoodOrders);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="py-6 pl-6 pr-10">
      <DataTable
        columns={columns}
        data={foodOrders || []}
        setFoodOrders={setFoodOrders}
      />
    </div>
  );
}
