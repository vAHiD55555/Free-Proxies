function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.165.161.240:8864",
        "SOCKS 121.165.162.9:8884",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 201.217.28.203:88",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 171.238.102.99:1081",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 203.76.98.210:9090",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 89.38.97.60:13956",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 87.117.11.57:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 157.180.121.252:31773",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 78.138.17.50:443",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 117.74.65.207:80",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}