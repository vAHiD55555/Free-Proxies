function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.46.249.145:36918",
        "SOCKS 194.87.77.22:80",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 78.12.220.164:32090",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 43.224.118.206:1120",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}