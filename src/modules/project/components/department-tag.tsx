export function DepartmentTag({ content, onClose }: { content: string; onClose: () => void }) {
  return (
    <div className="p-1 py-0 rounded border border-table-lightGray mr-2 flex items-center font-medium text-sm bg-table-dark mb-3">
      <span>{content}</span>
      <span className="font-bold ml-2 cursor-pointer" onClick={onClose}>
        X
      </span>
    </div>
  );
}
