interface IProps {
    children: string;
}

export const Separator = ({ children }: IProps) => (
    <div className="flex justify-center items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-gray-600" />
        <span className="px-3 text-gray-500 text-sm">{children}</span>
        <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-gray-800 to-gray-600" />
    </div>
)