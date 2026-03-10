function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.87.173.104:1080",
        "SOCKS 37.235.162.210:1080",
        "SOCKS 34.175.32.240:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 77.237.241.138:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 109.195.4.63:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 123.54.197.53:23357",
        "SOCKS 213.165.58.6:1080",
        "SOCKS 95.85.252.153:21064",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 79.111.14.142:1080",
        "SOCKS 147.45.226.173:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 147.45.137.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}