function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.178.172.5:15303",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 176.9.164.117:60018",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 117.74.65.207:443",
        "SOCKS 52.221.222.182:80",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 58.186.211.120:16000",
        "SOCKS 149.224.205.164:3128",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 115.221.245.167:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}