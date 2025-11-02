function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 152.53.36.101:25055",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 119.252.173.26:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 95.47.239.75:3128",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 72.10.160.172:19021",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 61.8.70.114:2024",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}