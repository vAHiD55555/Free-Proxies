function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39533",
        "SOCKS 62.60.131.188:8180",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 62.60.131.253:5165",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 36.255.98.181:4437",
        "SOCKS 88.99.30.148:5051",
        "SOCKS 158.160.133.16:8087",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 62.60.131.253:5014",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 213.35.110.67:10850",
        "SOCKS 181.214.39.73:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}