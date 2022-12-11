import Link  from './Link';

function Sidebar(){
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link key={link.label}
                     to={link.path}
                     activeClassName="font-bold border-l-4 border-blue-400 pl-2"
                     className="mb-3" >{link.label}</Link>
    });

    return (
        <div className="sticky top-0 overflow-y flex flex-col items-start">
            {renderedLinks}
        </div>
    );

}

export default Sidebar;