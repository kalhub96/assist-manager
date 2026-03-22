import { useAssets }from "../hooks/useassets";

export default function Library() {
  const { assets, addAsset } = useAssets();

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    addAsset({
      id: crypto.randomUUID(),
      name: file.name,
      type: "image", // simplify for now
      url,
    });
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Library</h2>

      <input type="file" onChange={handleUpload} />

      <div className="grid grid-cols-4 gap-4 mt-4">
        {assets.map(asset => (
          <div key={asset.id} className="border p-2">
            <img src={asset.url} className="w-full h-32 object-cover" />
            <p className="text-sm mt-2">{asset.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}