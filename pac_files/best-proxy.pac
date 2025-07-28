function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.250.3.58:8080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 183.80.22.206:16000",
        "SOCKS 58.186.45.153:16000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 207.180.192.43:8118",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 18.179.46.106:999",
        "SOCKS 135.181.203.208:80",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}