export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 text-center bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-red-600">
          الرابط غير متاح ⚠️
        </h2>
        <p>عذرًا، هذا الرابط غير موجود أو انتهت صلاحيته.</p>
        <p>يرجى تحديد رمز مجموعة صالح في عنوان URL للمتابعة.</p>
      </div>
    </div>
  );
}
