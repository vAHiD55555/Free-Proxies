function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 89.58.45.94:46135",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.141.150.194:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 58.147.171.38:28526",
        "SOCKS 103.174.178.140:2021",
        "SOCKS 89.58.45.94:59877",
        "SOCKS 158.101.113.18:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}