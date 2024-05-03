const nextConfig = {
    images : {
        domains : ["images.pexels.com"]
    },
    // output: "export"
    redirects : async () => {
        return [
            // {
            //     source: '/redirection',
            //     destination : '/',
            //     permanent: false
            // },
            {
                source: '/redirection/:id',
                destination : '/home',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
