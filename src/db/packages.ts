interface ListPackage {
    id: number,
    status: boolean,
    version: string,
    name: string,
    link: string,
    slug: string,
    image: {
        link: string,
        alt: string,
        size: {
            width: number,
            height: number,
        }
    },
    github: {
        repo: string,
        orgs: string,
    },
    new?: boolean
}

const BaseUrl: string = '/package/';

const ListPackage: ListPackage[] = [
    {
        id: 1,
        status: true,
        version: "1.1.0",
        name: "React Huge Icons",
        link: BaseUrl + "react-huge-icons",
        slug: "react-huge-icons",
        image: {
            link: "/react-huge-icons.jpg",
            alt: "React Huge Icons",
            size: {
                width: 360,
                height: 250,
            }
        },
        github: {
            repo: "react-huge-icons",
            orgs: "zero-icons",
        },
        new: true,
    },
    {
        id: 2,
        status: false,
        version: "1.1.0",
        name: "24234",
        link: BaseUrl + "react-2huge-icons",
        slug: "react-2huge-icons",
        image: {
            link: "/react-huge-icons.jpg",
            alt: "678678",
            size: {
                width: 300,
                height: 300,
            }
        },
        github: {
            repo: "react-huge-icons",
            orgs: "zero-icons",
        },
        new: true,
    }
]

export default ListPackage;
