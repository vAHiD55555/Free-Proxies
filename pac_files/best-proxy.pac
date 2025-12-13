function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 50.222.120.243:1080",
        "SOCKS 128.140.76.145:27557",
        "SOCKS 128.140.76.145:31177",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 40.172.223.148:80",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}