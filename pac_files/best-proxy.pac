function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 212.110.188.198:34405",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 95.158.15.161:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 27.79.210.238:16000",
        "SOCKS 181.114.62.1:8085",
        "SOCKS 31.14.114.73:1081",
        "SOCKS 27.79.239.140:16000",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 115.221.245.167:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}