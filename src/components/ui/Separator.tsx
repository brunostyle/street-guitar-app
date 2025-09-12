interface IProps {
    children: string;
}

export const Separator = ({ children }: IProps) => (
    <div className="flex justify-center items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-default-100 to-default-300" />
        <span className="px-3 text-gray-500 text-sm">{children}</span>
        <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-default-100 to-default-300" />
    </div>
)