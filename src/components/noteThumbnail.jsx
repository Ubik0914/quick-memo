import Link from "next/link";

const Thumbnail = () => {

    const now = Date(Date.now()); // ← () を付ける

    return (
        <Link href={"notes/hogehogeheogheogheogghegheghegoegeoghegoehgoegheo"}>
            <div className="w-full h-20 my-4 rounded-xl border p-2">
                <h2 className="text-xl truncate font-bold">空間的連続性を伴った概念的アプローチが漠然と示唆されつつも、不可逆的な構造性が優先的に抽出される可能性を否定できない。対象的な意味合いにおいて仮説的論述が形式知と暗黙知の交差点を曖昧にするが、定義不能な抽象性がそれを上書きする。
                </h2>

                <p className="mt-2 thin opacity-70">{now}</p>

            </div>
        </Link>

    )



}
export default Thumbnail
