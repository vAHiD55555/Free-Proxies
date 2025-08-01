function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 58.186.92.233:16000",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 103.247.23.140:4317",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 116.103.131.240:1023",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 27.79.134.70:16000",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 42.118.1.52:16000",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}