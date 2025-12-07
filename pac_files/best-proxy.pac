function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.47.188.189:8080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 91.107.162.123:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 159.223.32.95:8080",
        "SOCKS 78.39.177.76:8070",
        "SOCKS 52.201.85.24:80",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 203.25.208.163:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}