function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 141.94.195.25:22563",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 176.117.106.149:8080",
        "SOCKS 182.160.105.46:14157",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 52.188.28.218:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 47.250.51.110:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 186.235.123.3:8080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 121.169.46.116:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}