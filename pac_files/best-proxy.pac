function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.205:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 67.43.236.19:6787",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 49.12.212.161:2090",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 128.140.76.145:32187",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 119.81.71.27:80",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 176.9.238.173:47679",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}