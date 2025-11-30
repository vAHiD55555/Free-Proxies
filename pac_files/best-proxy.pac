function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.80.40.51:1040",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 171.238.91.139:1068",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 171.238.103.65:1040",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 179.96.28.58:80",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 66.201.4.219:3128",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 171.238.103.65:1120",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}