interface ActionButtonProps {
    text: string;
    onClick?: () => void;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ActionButton = ({ text, onClick, Icon }: ActionButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="items-center flex border border-[#3a3a44] bg-[#292835] hover:bg-[#33333f] p-2 rounded-full transform hover:scale-95 transition-transform"
            title={text}
        >
            <Icon />
            <p className="p-1">{text}</p>
        </button>
    )
}
