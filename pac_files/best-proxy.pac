function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 70.36.109.21:60009",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 146.103.99.6:6588",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 78.109.201.55:81",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 212.110.188.222:34411",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 51.158.117.213:16379",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}