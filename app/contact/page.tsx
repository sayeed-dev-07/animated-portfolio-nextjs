export default async function TestLoadingPage() {
  // force 3 seconds delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Page Loaded</h1>
      <p>If you saw the spinner, loading.tsx works.</p>
    </div>
  );
}
