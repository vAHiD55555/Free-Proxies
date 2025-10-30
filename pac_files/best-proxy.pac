function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 103.72.89.27:8097",
        "SOCKS 45.167.126.175:999",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 110.34.1.178:7777",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}