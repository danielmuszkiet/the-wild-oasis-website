import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ cabinId: string }> },
) {
  const { cabinId } = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(Number(cabinId)),
      getBookedDatesByCabinId(Number(cabinId)),
    ]);

    return Response.json({
      success: true,
      data: { cabin, bookedDates },
    });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
