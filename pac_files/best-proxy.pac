function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.146:4100",
        "SOCKS 185.93.89.143:8402",
        "SOCKS 8.221.141.88:50",
        "SOCKS 185.93.89.179:9381",
        "SOCKS 185.93.89.158:22812",
        "SOCKS 185.93.89.147:4022",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 199.188.204.105:8080",
        "SOCKS 185.93.89.187:4572",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 185.93.89.146:4270",
        "SOCKS 47.76.155.38:1100",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 185.93.89.179:10005",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.93.89.187:10586",
        "SOCKS 185.93.89.147:8177",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 185.93.89.179:17545",
        "SOCKS 205.185.123.62:2555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}