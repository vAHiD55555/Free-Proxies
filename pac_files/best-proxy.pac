function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.168.53:44887",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 179.96.28.58:80",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 47.236.169.53:33333",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 193.181.35.237:8118",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 119.93.33.130:8082",
        "SOCKS 98.190.102.40:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}