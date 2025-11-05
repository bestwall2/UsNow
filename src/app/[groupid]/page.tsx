import { Metadata } from "next";

async function getGroupData(groupid: string) {
  const res = await fetch("https://sheetdb.io/api/v1/b1trlzrz5n1uu");
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
  return {
    title,
  };
}

export default async function GroupPage({
  params,
}: {
  params: { groupid: string };
}) {
  const group = await getGroupData(params.groupid);

  if (!group) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 text-center bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            الرابط غير متاح ⚠️
          </h2>
          <p>عذرًا، هذا الرابط غير موجود أو انتهت صلاحيته.</p>
          <p>يرجى التواصل مع الدعم للحصول على رابط جديد.</p>
        </div>
      </div>
    );
  }

  const webUrl = "https://chat.whatsapp.com/" + params.groupid;

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: `linear-gradient(135deg, ${group.ColorId}1A, ${group.ColorId}33)`,
      }}
    >
      <div className="w-full max-w-4xl p-8 mx-4 bg-white rounded-2xl shadow-lg md:flex md:gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="grid w-16 h-16 text-3xl font-bold text-white rounded-lg place-items-center"
              style={{ backgroundColor: group.ColorId }}
            >
              و
            </div>
            <div>
              <div className="font-semibold">مجموعة واتساب</div>
              <div className="text-sm text-gray-500">
                فرص عمل - مشاريع - مهارات
              </div>
            </div>
          </div>

          <h1
            className="mb-2 text-3xl font-bold"
            style={{ color: group.ColorId }}
          >
            انضم إلى مجموعتنا وابدأ فرصتك القادمة!
          </h1>
          <div
            className="p-4 mb-6 rounded-lg"
            style={{ backgroundColor: `${group.ColorId}1A` }}
          >
            <p>
              تعرّف على كيفية العمل في التجارة الإلكترونية من المنزل، وانضم إلى
              المجموعة لشرح كامل.
            </p>
            <p>
              نقدّم فرصًا حقيقية ومجانية للتدريب على التجارة الإلكترونية.
            </p>
          </div>

          <a
            href={webUrl}
            className="flex items-center justify-center w-full gap-2 px-6 py-4 text-lg font-semibold text-white rounded-xl"
            style={{ backgroundColor: group.ColorId }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6 invert brightness-0"
            />
            انضم الآن إلى المجموعة
          </a>

          <footer className="mt-4 text-xs text-center text-gray-500">
            في حال لم يُفتح التطبيق، سيتم تحويلك تلقائيًا إلى صفحة الدعوة عبر
            الويب.
          </footer>
        </div>

        <aside className="flex-shrink-0 p-6 text-center bg-gray-50 rounded-xl md:w-64">
          <p className="font-semibold">رمز المجموعة</p>
          <div
            className="my-2 text-2xl font-bold"
            style={{ color: group.ColorId }}
          >
            {params.groupid}
          </div>
          <p className="text-sm text-gray-500">
            سيتم فتح الرابط مباشرة في تطبيق واتساب إذا كان مثبتًا.
          </p>
        </aside>
      </div>
    </div>
  );
}
