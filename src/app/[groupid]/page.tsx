import { Metadata } from "next";

async function getGroupData(groupid: string) {
  const res = await fetch("https://sheetdb.io/api/v1/b1trlzrz5n1uu", {
    cache: "no-store",
  });
  const data = await res.json();
  const group = data.find((g: any) => g.Codes === groupid);
  return group;
}

export async function generateMetadata({
  params,
}: {
  params: { groupid: string };
}): Promise<Metadata> {
  const group = await getGroupData(params.groupid);
  const title = group
    ? `انضم إلى مجموعة - ${group.UrlName}`
    : "الرابط غير متاح";
  return { title };
}

export default async function GroupPage({
  params,
}: {
  params: { groupid: string };
}) {
  const group = await getGroupData(params.groupid);

  if (!group) {
    return (
      <div
        dir="rtl"
        className="flex items-center justify-center min-h-screen bg-gray-50 p-6"
      >
        <div className="p-8 text-center bg-white rounded-2xl shadow-lg max-w-md">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            الرابط غير متاح ⚠️
          </h2>
          <p className="text-gray-600 mb-2">
            عذرًا، هذا الرابط غير موجود أو انتهت صلاحيته.
          </p>
          <p className="text-gray-500 text-sm">
            يرجى التواصل مع الدعم للحصول على رابط جديد.
          </p>
        </div>
      </div>
    );
  }

  const webUrl = "https://chat.whatsapp.com/" + params.groupid;
  const color = group.ColorId || "#22c55e"; // fallback to green

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center min-h-screen p-4 md:p-8"
      style={{
        background: `linear-gradient(135deg, ${color}1A, ${color}33)`,
      }}
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden md:flex md:gap-8">
        {/* Left section */}
        <div className="flex-1 p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="grid w-16 h-16 text-3xl font-bold text-white rounded-2xl place-items-center shadow-sm"
              style={{ backgroundColor: color }}
            >
              و
            </div>
            <div>
              <div className="font-semibold text-gray-800">مجموعة واتساب</div>
              <div className="text-sm text-gray-500">
                فرص عمل • مشاريع • مهارات
              </div>
            </div>
          </div>

          <h1
            className="mb-3 text-3xl md:text-4xl font-extrabold leading-snug"
            style={{ color }}
          >
            انضم إلى مجموعتنا وابدأ فرصتك القادمة!
          </h1>

          <div
            className="p-5 mb-8 rounded-2xl border-l-4 text-gray-700 leading-relaxed"
            style={{
              backgroundColor: `${color}0D`,
              borderColor: color,
            }}
          >
            <p>
              تعرّف على كيفية العمل في التجارة الإلكترونية من المنزل، وانضم إلى
              المجموعة لشرح كامل ومجاني خطوة بخطوة.
            </p>
            <p className="mt-2">
              نقدّم فرصًا حقيقية للتدريب والتعاون في مشاريع رقمية.
            </p>
          </div>

          <a
            href={webUrl}
            className="flex items-center justify-center w-full gap-3 px-6 py-4 text-lg font-semibold text-white rounded-2xl shadow-md transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: color }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6 invert brightness-0"
            />
            انضم الآن إلى المجموعة
          </a>

          <p className="mt-3 text-xs text-center text-gray-500">
            في حال لم يُفتح التطبيق، سيتم تحويلك تلقائيًا إلى صفحة الدعوة عبر
            الويب.
          </p>
        </div>

        {/* Right section (aside) */}
        <aside className="flex-shrink-0 p-8 md:w-72 bg-gray-50 rounded-t-3xl md:rounded-tr-none md:rounded-br-3xl text-center flex flex-col justify-center">
          <p className="font-semibold text-gray-800">رمز المجموعة</p>
          <div
            className="my-3 text-2xl font-bold tracking-wide"
            style={{ color }}
          >
            {params.groupid}
          </div>
          <p className="text-sm text-gray-500 mb-4">
            سيتم فتح الرابط مباشرة في تطبيق واتساب إذا كان مثبتًا.
          </p>

          <a
            href={webUrl}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-xl shadow-sm transition hover:scale-105"
            style={{ backgroundColor: color }}
          >
            فتح المجموعة
          </a>
        </aside>
      </div>
    </div>
  );
}
