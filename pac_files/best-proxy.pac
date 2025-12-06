function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 84.17.51.240:3128",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 140.238.22.48:8008",
        "SOCKS 128.140.76.145:17328",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 103.239.200.226:11",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 8.220.194.115:1080",
        "SOCKS 47.82.117.31:1011",
        "SOCKS 104.248.59.38:80",
        "SOCKS 87.107.48.225:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 216.218.249.27:8181",
        "SOCKS 200.70.35.2:8080",
        "SOCKS 208.65.90.3:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}