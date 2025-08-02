function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.240.34:8080",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 107.172.96.11:24283",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 58.186.52.30:16000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 18.143.165.238:13040",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 62.210.37.74:8012",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}