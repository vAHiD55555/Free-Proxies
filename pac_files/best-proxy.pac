function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 36.255.98.177:43937",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 62.60.131.183:11420",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 62.60.131.179:11918",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 202.62.47.98:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 115.127.178.42:2589",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 36.255.98.160:4569",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 184.95.220.42:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}