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
  const color = group?.ColorId || "#22c55e";
  const webUrl = `https://chat.whatsapp.com/${params.groupid}`;

  // === Error Page ===
  if (!group) {
    return (
      <main
        dir="rtl"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6"
      >
        <div className="max-w-md bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl text-center border border-white/50">
          <div className="text-5xl mb-3">⚠️</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            الرابط غير متاح
          </h2>
          <p className="text-gray-700 mb-3">
            عذرًا، هذا الرابط غير موجود أو انتهت صلاحيته.
          </p>
          <p className="text-sm text-gray-500">
            تواصل مع الدعم للحصول على رابط جديد.
          </p>
        </div>
      </main>
    );
  }

  // === Main Design ===
  return (
    <main
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{
        background: `linear-gradient(135deg, ${color}1A, ${color}40)`,
      }}
    >
      {/* Card container */}
      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 md:p-12 border border-white/50 text-center animate-fadeIn">
        {/* Logo / Icon */}
        <div
          className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          و
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ color }}
        >
          انضم إلى مجموعتنا على واتساب
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed max-w-lg mx-auto">
          اكتشف فرص العمل والمشاريع وتعلم مهارات جديدة من خلال مجتمع نشط في مجال
          التجارة الإلكترونية والعمل عن بعد. انضم إلينا لتبدأ رحلتك اليوم!
        </p>

        {/* CTA */}
        <a
          href={webUrl}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-md transition-transform transform hover:scale-[1.03] active:scale-[0.97]"
          style={{ backgroundColor: color }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6 invert brightness-0"
          />
          انضم الآن إلى المجموعة
        </a>

        <p className="mt-3 text-sm text-gray-500">
          سيتم تحويلك إلى تطبيق واتساب أو صفحة الدعوة على الويب تلقائيًا.
        </p>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 w-2/3 mx-auto" />

        {/* Group Info Section */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-semibold text-gray-700">رمز المجموعة</p>
          <div
            className="text-2xl font-bold tracking-wide"
            style={{ color }}
          >
            {params.groupid}
          </div>
          <p className="text-xs text-gray-500">
            شارك هذا الرمز مع أصدقائك للانضمام مباشرة.
          </p>

          {/* Small QR code for convenience */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
              webUrl
            )}`}
            alt="QR Code"
            className="mt-4 rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} مجموعات واتساب | جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
