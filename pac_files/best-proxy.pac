function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.140.164.179:3531",
        "SOCKS 13.140.164.179:3558",
        "SOCKS 13.140.164.179:3540",
        "SOCKS 222.102.194.158:1111",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 188.131.155.235:1088",
        "SOCKS 89.110.98.72:9050",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 43.198.22.151:10",
        "SOCKS 43.156.122.96:10800",
        "SOCKS 43.162.113.87:2080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 223.254.141.102:6632",
        "SOCKS 103.248.47.230:1080",
        "SOCKS 43.133.128.153:16012",
        "SOCKS 104.194.146.9:80",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 13.140.164.179:3616",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}